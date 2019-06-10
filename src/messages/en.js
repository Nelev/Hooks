import { flattenMessages } from "./utils";

const messages = {
    app: {
        title: "Hooks"
    },
    views: {},
    components: {
        header: {
            profileTitle: "Profile"
        }
    }
};

export default flattenMessages(messages);
