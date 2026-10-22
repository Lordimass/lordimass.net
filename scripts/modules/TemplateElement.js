export default class TemplateElement {
    html = "";
    parsedHtml = null;

    setFields(keyValuePairs) {
        this.parsedHtml = this.html;
        for (let i = 0; i < keyValuePairs.length; i++) {
            let key = keyValuePairs[i];
            let value = keyValuePairs[i + 1];
            this.parsedHtml = this.parsedHtml.replaceAll(`$${key}$`, value);
        }
    }

    firstChildTo(parent) {
        if (this.parsedHtml == null) this.parsedHtml = this.html;
        parent.insertAdjacentHTML('afterbegin', this.parsedHtml);
    }

    lastChildTo(parent) {
        if (this.parsedHtml == null) this.parsedHtml = this.html;
        parent.insertAdjacentHTML('beforeend', this.parsedHtml);
    }

    nextSiblingOf(element) {
        if (this.parsedHtml == null) this.parsedHtml = this.html;
        element.insertAdjacentHTML('afterend', this.parsedHtml);
    }
}