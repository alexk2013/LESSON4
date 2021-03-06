function Container() {
    this.id = '';
    this.className = '';
    this.htmlCode = '';
    this.value = '';
}
Container.prototype.render = function () {
    return this.htmlCode;
};

function Form(myId, myClass, myValue) {
    Container.call(this);
    this.id = myId;
    this.className = myClass;
    this.value = myValue;
}
Form.prototype = Object.create(Container.prototype);
Form.prototype.constructor = Form;
Form.prototype.render = function () {
    return this.value;
};
Form.prototype.correction = function () {
    let reg, value = this.value;
    value = value.replace(/[\s|;]'\b/gm, ' \"');
    value = value.replace(/\b'(?=[\s|;])|^'|'$|\b'(?=[\.|\,])/gm, '\"');
    return value;
};
document.getElementById('form').onsubmit = function (e) {
    e.preventDefault();
    let textArea = document.getElementById('text')
        , formNew = new Form('formId', 'formClass', textArea.value);
    textArea.value = formNew.correction();
};