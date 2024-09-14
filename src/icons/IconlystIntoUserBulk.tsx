import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystIntoUserBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 25 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.329 20.872a1 1 0 0 1-.705-.29l-2-1.99a1 1 0 0 1-.213-.313l-.002-.003-.001-.003-.001-.002-.001-.003h-.001a1 1 0 0 1-.002-.764q.02-.049.044-.094l.002-.003v-.002l.003-.003V17.4q.004-.001.003-.003v-.002h.002v-.003h.002v-.003l.002-.002.002-.003.002-.003v-.003l.003-.003.002-.002q.058-.098.138-.183 0-.001.003-.002l.002-.003h.002l.002-.003c0-.002.002.001.002-.003h.002v-.002l.003-.002 2-1.99a.999.999 0 1 1 1.41 1.417l-.282.282h2.526a1 1 0 1 1 0 2h-2.525l.28.28a.999.999 0 0 1-.704 1.71M11.305 3C8.7 3 6.587 5.144 6.587 7.786c0 2.644 2.112 4.786 4.718 4.786s4.718-2.142 4.718-4.786C16.023 5.144 13.911 3 11.305 3"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.57 13.926H8.945c-2.667 0-4.923 2.289-4.923 4.994 0 .504 0 1.105.093 1.614q.007.052.013.102c.031.19.227.365.51.365h5.722a.78.78 0 0 0 .722-.488l2.213-5.511a.784.784 0 0 0-.727-1.076"
      clipRule="evenodd"
      opacity={0.4}
    />
  </Svg>
);
export default IconlystIntoUserBulk;
