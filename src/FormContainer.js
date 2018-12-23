import { Container } from "unstated";

class FormContainer extends Container {
  state = {
    tab1: {
      businessName: "رستوران فکری",
      guildCode: "",
      username: "fakeUser",
      email: "test@mail.com"
    },
    tab2: {
      isRegistered: "false",
      registrationNumber: "",
      nationalCode: "",
      sheba: "IR890700001000112842809001",
      description: "توضیحات"
    },
    tab3: {
      firstName: "mohsen",
      lastName: "malekan",
      cellphone: "09363261694",
      contactNationalCode: "0946428611",
      state: "",
      city: "",
      address: "آدرس"
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
