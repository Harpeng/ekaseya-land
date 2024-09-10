<template>
    <footer class="footer"> 
        <a href="mailto:info@ekaseya.ru">
            <p class="footer__text">info@ekaseya.ru</p>
        </a>
        <div class="footer__messengers">
            <span class="footer__icon footer__icon--inst"></span>
            <span class="footer__icon footer__icon--telegram"></span>
            <span class="footer__icon footer__icon--whats"></span>
            <span class="footer__icon footer__icon--vk"></span>
        </div>
        <a class="footer__contact" href="tel:8 (928) 164-19-63">
            <p class="footer__number">8 (928) 164-19-63</p>
        </a>
    </footer>
</template>
<script>
export default {
    
}
</script>
<style lang="scss">
    .footer {
        padding: 56px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;

        &__text {
            &:hover {
                opacity: 0.5;
                text-decoration: underline;
                text-underline-offset: 4px;
            }
        }

        &__messengers {
            display:  flex;
            align-items: center;
            gap: 10px;
        }

        &__icon {
            display: block;
            width: 20px;
            height: 20px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;

            &:hover {
                opacity: 0.5;
                text-decoration: underline;
            }

            &--inst {
                background-image: url(@/assets/vendor/images/instagram.svg);
            }

            &--telegram {
                background-image: url(@/assets/vendor/images/telegram.svg);
            }

            &--vk {
                background-image: url(@/assets/vendor/images/vk.svg);
            }

            &--whats {
                background-image: url(@/assets/vendor/images/whatsapp.svg);
            }
        }

        &__contact {
            :hover {
                opacity: 0.5;
                text-decoration: underline;
                text-underline-offset: 4px;
            }
        }
    }
</style>