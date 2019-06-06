import { flattenMessages } from "./utils";

const messages = {
    app: {
        title: "Admin Center"
    },
    actions: {
        create: "Create",
        delete: "Delete",
        update: "Update"
    },
    views: {
        users: {},
        applications: {
            adminAppsTitle: "Manage projects and users",
            appsInSubTitle: "Your applications",
            appsNotInSubTitle: "Recommended applications"
        }
    },
    components: {
        userTable: {
            columns: {
                role: "Role",
                name: "Name",
                email: "Email"
            }
        },
        broswerBannerText:
            "We cannot guarantee the user experience with your current browser. Please consider using Chrome."
    }
};

export default flattenMessages(messages);
