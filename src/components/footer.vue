
<template>
    <footer class="footer-scaperoom bg-flower-900">
        <div class="content-footer container d-flex align-items-center justify-content-between py-2">
            <nav>
                <ul class="d-flex align-items-center column-gap-3">
                    <li><a class="py-2.5 px-2 color-seashell-100" href="">Eleven</a></li>
                    <li><a class="py-2.5 px-2 color-seashell-100" href="">Twelve</a></li>
                    <li><a class="py-2.5 px-2 color-seashell-100" href="">Thirteen</a></li>
                    <li><a class="py-2.5 px-2 color-seashell-100" href="">Fourteen</a></li>
                </ul>
            </nav>

            <nav>
                <ul class="d-flex align-items-center column-gap-3 fs-extra-large">
                    <li>
                        <a class="py-2.5 px-2 color-seashell-100" href=""><i class="bi bi-youtube"></i></a>
                    </li>
                    <li>
                        <a class="py-2.5 px-2 color-seashell-100" href=""><i class="bi bi-facebook"></i></a>
                    </li>
                    <li><a class="py-2.5 px-2 color-seashell-100" href=""><img src="../assets/twitter.svg" alt=""></a></li>
                    <li><a class="py-2.5 px-2 color-seashell-100" href=""><i class="bi bi-instagram"></i></a></li>
                    <li><a class="py-2.5 px-2 color-seashell-100" href=""><i class="bi bi-linkedin"></i></a></li>
                </ul>
            </nav>
        </div>
        <p class="copyright-footer color-seashell-100 text-center py-5">CompanyName@ 202X. All rights reserved.</p>

    </footer>

</template>

<style scoped>
    .copyright-footer{
        border-top: 1px solid var(--california-500);
    }
    @media screen and (max-width: 992px) {
        .footer-scaperoom > .content-footer{
            flex-direction: column;
        }
    }
</style>

<script>
    export default {
        name: 'Footer'
    }
</script>
