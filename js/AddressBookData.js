class AddressbookData{
 
    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
      if (nameRegex.test(name)){
        this._name = name;
        console.log("data entered");}

      else throw "Name is Incorrect";
    }
  
    get address() {
      return this._address;
    }
    set address(address) {
      let addressRegex = RegExp('^([A-Za-z0-9/.,-]{3,}.)+$');
      if (addressRegex.test(address)){
        this._address = address;
        console.log("It works");}

      else throw "Address is Incorrect";
    }
  
    get city() {
      return this._city;
    }
    set city(city) {
      this._city = city;
    }
  
    get state() {
      return this._state;
    }
    set state(state) {
      this._state = state;
    }
  
    get zipcode() {
      return this._zipcode;
    }
    set zipcode(zipcode) {
      let zipRegex = RegExp('^[1-9]{1}[0-9]{5}$');
      if (zipRegex.test(zipcode)){
        this._zipcode = zipcode;
        console.log("zip works");}
      else throw "zipcode is Incorrect";
    }
  
    get phone() {
      return this._phone;
    }
    set phone(phone) {
      let phoneRegex = RegExp('^([+]{1})?([91]{2})?([1-9]{1}[0-9]{9})$');
      if (phoneRegex.test(phone)){
        this._phone = phone;
        console.log("It works");}
      else throw "Phone is Incorrect";
    }
    

  }
  addressbookData=new AddressbookData("Basila Noushad", "WEELS", "Kottayam", "Kerala", "123456", +9112345909);