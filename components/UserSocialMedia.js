import { loginSocial } from "@/actions/user-action";

export default function UserSocialMedia() {
    return (
        <div className="mt-4 flex gap-4">
            <form
                action={loginSocial}
                className="w-1/2 py-2 text-center text-white bg-red-600 rounded hover:bg-red-500 cursor-pointer"
            >
                <button
                    className="uppercase font-roboto font-medium text-sm"
                    type="submit"
                    name="socialLogIn"
                    value="google"
                >
                    google
                </button>
            </form>

            <form
                action={loginSocial}
                className="w-1/2 py-2 text-center text-white bg-blue-500  rounded hover:bg-blue-600 cursor-pointer"
            >
                <button
                    className="uppercase font-roboto font-medium text-sm"
                    type="submit"
                    name="socialLogIn"
                    value="twitter"
                >
                    twitter
                </button>
            </form>
        </div>
    );
}
