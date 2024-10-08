import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystThumbLikeDislike1Bold = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.805 12.01c.156-.206.231-.482.379-1.033l.262-.97c.281-1.042.421-1.562.304-1.974a1.54 1.54 0 0 0-.689-.9c-.367-.22-.906-.22-1.984-.22h-.99c-.185 0-.22-.072-.168-.234.715-2.223.348-3.108-.361-3.254-.271-.056-.384-.053-.598.156-.694.818-1.865 2.098-2.504 2.791-.165.18-.248.27-.307.37a1 1 0 0 0-.117.3c-.025.114-.025.235-.025.477v2.967c0 .71 0 1.063.136 1.335.124.25.326.451.576.576.271.136.626.136 1.334.136h3.1c.571 0 .857 0 1.096-.098.22-.089.412-.236.556-.426M18.851 14.644c-.059-.101-.142-.19-.307-.37-.639-.692-1.81-1.973-2.504-2.791-.214-.208-.327-.211-.598-.155-.709.145-1.076 1.03-.361 3.253.053.162.017.234-.168.234h-.99c-1.078 0-1.617 0-1.984.22a1.55 1.55 0 0 0-.689.9c-.117.412.023.932.304 1.973l.262.97c.148.552.223.828.379 1.034.144.189.336.336.556.426.239.097.525.097 1.096.097h3.1c.708 0 1.063 0 1.334-.136.25-.124.452-.326.576-.576.136-.271.136-.626.136-1.335v-2.966c0-.242 0-.364-.025-.478a1 1 0 0 0-.117-.3M3.751 11.76V6.837a.75.75 0 0 0-1.5 0v4.923a.75.75 0 0 0 1.5 0M21 14.04a.75.75 0 0 0-.75.75v4.922a.75.75 0 0 0 1.5 0V14.79a.75.75 0 0 0-.75-.75M20.669 6.122a.75.75 0 0 0-1.058-.083l-1.011.863a.75.75 0 1 0 .974 1.14l1.012-.862a.75.75 0 0 0 .083-1.058M4.53 16.203l-1.013.863a.752.752 0 0 0 .975 1.14l1.012-.862a.752.752 0 0 0-.975-1.141M16.326 6.349a.75.75 0 0 0 .96-.453l.447-1.252a.75.75 0 1 0-1.412-.506l-.448 1.252a.75.75 0 0 0 .453.959M7.776 17.897a.746.746 0 0 0-.958.454l-.447 1.252a.748.748 0 0 0 .706 1.002.75.75 0 0 0 .706-.498l.447-1.252a.75.75 0 0 0-.454-.958"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystThumbLikeDislike1Bold;
