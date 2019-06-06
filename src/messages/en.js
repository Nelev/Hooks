import { flattenMessages } from "./utils";

const messages = {
    app: {
        title: "w-Console"
    },
    views: {},
    components: {
        header: {
            profileTitle: "Profile"
        }
    }
};

export default flattenMessages(messages);
