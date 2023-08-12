import { Icon, IconProps } from '../Icon';

const ShoppingCartAndBadge = (props: IconProps) => (
  <Icon viewBox="0 0 22 22" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.25 20.7499C6.94036 20.7499 7.5 20.1902 7.5 19.4999C7.5 18.8095 6.94036 18.2499 6.25 18.2499C5.55964 18.2499 5 18.8095 5 19.4999C5 20.1902 5.55964 20.7499 6.25 20.7499ZM15 20.7499C15.6904 20.7499 16.25 20.1902 16.25 19.4999C16.25 18.8095 15.6904 18.2499 15 18.2499C14.3096 18.2499 13.75 18.8095 13.75 19.4999C13.75 20.1902 14.3096 20.7499 15 20.7499ZM3.6375 6.37488H17.5C17.6926 6.37015 17.8766 6.4545 17.9987 6.60349C18.1208 6.75248 18.1674 6.94947 18.125 7.13738L16.875 12.7624C16.8095 13.0531 16.5479 13.2572 16.25 13.2499H5L5.5125 15.7499H16.25V16.9999H5C4.69827 17.006 4.4353 16.7956 4.375 16.4999L1.9875 4.49988H0V3.24988H2.5C2.80173 3.2438 3.0647 3.45418 3.125 3.74988L3.6375 6.37488ZM4.7623 11.9999H15.7498L16.7186 7.62489H3.8873L4.7623 11.9999Z"
      fill="currentColor"
    />
    <circle cx="20" cy="2" r="2" fill="#FA4D56" />
  </Icon>
);

export default ShoppingCartAndBadge;