// * Создать программный код, который определяет, может ли пользователь получить доступ к ресурсу на основе его роли и наличия разрешений.
// * Полученное булево значение сохраните в переменной isAccess.

// * Условия доступа:
// * - Пользователь должен иметь статус администратора (isAdmin) или быть подтвержденным пользователем (isVerifiedUser)
// * - А также пользователь должен обладать специальным разрешением (hasSpecialPermission) или временным пропуском (hasTemporaryPass)

// True:
const isAdmin = false;
const isVerifiedUser = false;
const hasSpecialPermission = true;
const hasTemporaryPass = false;

// False:
// const isAdmin = false;
// const isVerifiedUser = true;
// const hasSpecialPermission = false;
// const hasTemporaryPass = false;

// Solution:
let isAccess = true;
// let isAccess = false;

if ((isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass)) {
    isAccess = true;
    console.log(isAccess);
} else {
    isAccess = false;
    console.log(isAccess);
}
// let giveMeAccess = (isAdmin || isVerifiedUser) && (hasSpecialPermission || hasTemporaryPass);