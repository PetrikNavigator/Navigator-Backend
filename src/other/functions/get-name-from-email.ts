export function getNameFromEmail(email: string): string {
    return email.split("@")[0]
}