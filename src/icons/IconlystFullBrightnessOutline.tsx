import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFullBrightnessOutline = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.511 9.387a2.751 2.751 0 1 0 0 5.502 2.751 2.751 0 0 0 0-5.502m-4.251 2.75a4.251 4.251 0 1 1 8.502.001 4.251 4.251 0 0 1-8.502 0"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.816 2.511a2 2 0 0 1 1.392 0c.248.092.449.236.628.39.168.145.356.334.57.547l.853.853c.223.223.258.252.289.272a.5.5 0 0 0 .165.069c.036.007.082.012.397.012h1.206c.302 0 .568 0 .79.016.235.018.479.057.72.168.434.2.784.55.984.984.11.241.15.485.168.72.017.222.017.488.017.79v1.206c0 .315.004.361.011.397a.5.5 0 0 0 .07.166c.019.03.048.065.271.288l.854.854c.213.213.401.402.546.57.154.179.299.379.39.628.166.449.166.942 0 1.392a2 2 0 0 1-.39.628c-.145.168-.333.356-.546.57l-.854.853c-.223.223-.252.258-.272.289a.5.5 0 0 0-.069.166c-.007.035-.011.081-.011.396v1.207c0 .301 0 .568-.017.789a2 2 0 0 1-.168.72c-.2.435-.55.784-.984.984-.241.111-.485.15-.72.168-.222.017-.488.017-.79.017H16.11c-.315 0-.361.004-.397.012a.5.5 0 0 0-.165.068c-.031.02-.066.05-.29.273l-.852.853c-.214.213-.402.401-.57.546-.18.154-.38.299-.628.39a2 2 0 0 1-1.392 0 2 2 0 0 1-.628-.39c-.168-.145-.357-.333-.57-.546l-.853-.854c-.223-.222-.258-.252-.29-.272a.5.5 0 0 0-.165-.068c-.036-.008-.081-.012-.397-.012H7.707c-.302 0-.568 0-.79-.017a2 2 0 0 1-.72-.168 2 2 0 0 1-.984-.984 2 2 0 0 1-.168-.72c-.017-.222-.017-.488-.017-.79v-1.206c0-.316-.004-.361-.012-.397a.5.5 0 0 0-.068-.166c-.02-.03-.05-.066-.272-.289l-.853-.852c-.213-.214-.402-.402-.547-.57a2 2 0 0 1-.39-.628 2 2 0 0 1 0-1.392c.092-.249.236-.45.39-.628.145-.168.334-.357.547-.57l.853-.853c.223-.223.252-.258.272-.289a.5.5 0 0 0 .068-.166c.008-.035.012-.081.012-.396V7.332c0-.302 0-.568.017-.79.017-.235.057-.479.168-.72.2-.434.55-.783.984-.984.24-.11.485-.15.72-.168.222-.016.488-.016.79-.016h1.206c.316 0 .361-.005.397-.012a.5.5 0 0 0 .166-.069c.03-.02.066-.05.289-.272l.853-.853c.213-.213.402-.402.57-.547.179-.154.379-.298.628-.39m.872 1.407a.5.5 0 0 0-.353 0 .6.6 0 0 0-.169.12c-.12.104-.269.252-.505.488l-.836.836-.036.036c-.163.164-.319.32-.504.438-.2.128-.422.22-.653.27-.216.048-.436.048-.667.048H7.732c-.335 0-.544 0-.703.012a.6.6 0 0 0-.204.034.5.5 0 0 0-.25.25.6.6 0 0 0-.034.205c-.012.158-.013.368-.013.702V8.59c0 .231 0 .451-.046.667a2 2 0 0 1-.271.653 3 3 0 0 1-.438.504l-.037.037-.835.835c-.236.236-.384.385-.488.505a.6.6 0 0 0-.12.169.5.5 0 0 0 0 .353c.004.011.022.055.12.17.104.12.252.268.488.505l.835.835.037.036c.163.163.32.319.438.505q.193.302.27.653c.048.215.048.435.047.666v1.233c0 .335 0 .544.013.703.01.15.03.194.034.204.051.11.14.2.25.25.01.005.054.023.204.035.159.011.368.012.703.012h1.233c.231 0 .451 0 .666.047.232.05.454.142.654.27.185.119.34.275.504.438l.036.037.836.835c.236.237.385.384.505.488a.6.6 0 0 0 .169.12c.114.042.24.042.353 0a.6.6 0 0 0 .17-.12c.12-.104.268-.251.505-.488l.835-.835.037-.037c.163-.163.318-.319.504-.438.2-.128.421-.22.653-.27.215-.048.435-.047.666-.047h1.232c.335 0 .545 0 .703-.012a.6.6 0 0 0 .205-.035.5.5 0 0 0 .25-.25.6.6 0 0 0 .034-.204c.012-.159.013-.368.013-.703v-1.232c0-.231-.001-.451.046-.667.051-.232.143-.453.27-.653.12-.186.276-.341.439-.504l.037-.037.835-.835c.237-.237.384-.385.488-.506a.6.6 0 0 0 .12-.169.5.5 0 0 0 0-.353.6.6 0 0 0-.12-.169c-.104-.12-.251-.269-.488-.505l-.835-.836-.037-.036a3 3 0 0 1-.438-.505 2 2 0 0 1-.27-.653c-.048-.215-.048-.435-.048-.666V7.358c0-.335 0-.545-.012-.703a.6.6 0 0 0-.034-.205.5.5 0 0 0-.25-.25.6.6 0 0 0-.205-.034 11 11 0 0 0-.702-.012h-1.233c-.23 0-.45 0-.666-.047a2 2 0 0 1-.653-.27c-.186-.12-.341-.275-.505-.439l-.036-.036-.835-.836a11 11 0 0 0-.506-.488.6.6 0 0 0-.169-.12"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFullBrightnessOutline;
