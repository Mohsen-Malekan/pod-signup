import { Container } from "unstated";

class FormContainer extends Container {
  state = {
    tab1: {
      businessName: "",
      guildCode: "",
      username: "",
      email: ""
    },
    tab2: {
      isRegistered: "false",
      registrationNumber: "",
      nationalCode: "",
      sheba: "",
      description: ""
    },
    tab3: {
      firstName: "",
      lastName: "",
      cellphone: "",
      contactNationalCode: "",
      state: "",
      city: "",
      address: ""
    },
    tab4: {
      docs: [{ name: "", file: undefined }],
      logoImage: "",
      coverImage: ""
    }
  };

  setData = (tab, data) => {
    return this.setState({ [tab]: { ...data } });
  };
}

const container = new FormContainer();
export default container;
