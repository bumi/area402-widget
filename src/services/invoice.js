export default class InvoiceService {
  constructor(options) {
    this.baseURL = options.baseURL;
    this.memo = options.memo || "";
    this.apiToken = options.apiToken;
    this.value = parseInt(options.value || 0);
    this.paymentRequestRenderer = options.paymentRequestRenderer;
  }

  requestPayment() {
    return this.newInvoice().then((invoice) => {
      let promise;
      if (typeof window.webln !== "undefined") {
        promise = this.payWithWebln();
      } else {
        promise = this.renderPaymentRequest();
      }

      // webln (only in master?) has an issue and this promise isn't resolving.
      // `Uncaught (in promise) TypeError: Cannot read property 'error' of null`
      // to work around this issue and to make sure we watch for the payment we
      // simply return the watchInvoice promise directly.
      // return promise.then(() => {
      //  return this.watchInvoice();
      // });

      return this.watchInvoice();
    });
  }

  renderPaymentRequest() {
    return new Promise((resolve, reject) => {
      if (!this.paymentRequestRenderer) {
        return reject(new Error("No paymentRequestRenderer configured"));
      }
      return resolve(this.paymentRequestRenderer(this.invoice));
    });
  }

  payWithWebln() {
    if (!window.webln.isEnabled) {
      return window.webln
        .enable()
        .then(() => {
          return window.webln.sendPayment(this.invoice.payment_request);
        })
        .catch((e) => {
          return this.renderPaymentRequest();
        });
    } else {
      return window.webln.sendPayment(this.invoice.payment_request);
    }
  }

  newInvoice() {
    let args = {
      method: "POST",
      mode: "cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ memo: this.memo, value: this.value }),
    };
    return this._fetch(`${this.baseURL}/v1/invoices`, args).then((invoice) => {
      this.invoice = invoice;
      return invoice;
    });
  }

  watchInvoice() {
    if (this.invoiceWatcher) {
      window.clearInterval(this.invoiceWatcher);
    }

    return new Promise((resolve, reject) => {
      this.invoiceWatcher = window.setInterval(() => {
        this._fetch(
          `${this.baseURL}/v1/invoice/${this.invoice.identifier}`,
        ).then((invoice) => {
          if (invoice.settled) {
            // replace the locally stored invoice with the settled server response
            this.invoice = invoice;
            this.stopWatchingInvoice();
            resolve(invoice);
          }
        });
      }, 2000);
    });
  }
  stopWatchingInvoice() {
    window.clearInterval(this.invoiceWatcher);
    this.invoiceWatcher = null;
  }

  _fetch(url, args = {}) {
    if (!args.headers) {
      args.headers = {};
    }
    args.headers["Api-Token"] = this.apiToken;
    return fetch(url, args).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(response);
      }
    });
  }
}
