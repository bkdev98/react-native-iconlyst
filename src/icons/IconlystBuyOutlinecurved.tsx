import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBuyOutlinecurved = ({
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
      d="M13.02 11.892h2.773a.75.75 0 0 0 0-1.5H13.02a.75.75 0 1 0 0 1.5"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.332 18.802q.373.01.766.011c1.963 0 4.217-.23 5.78-1.446 1.72-1.337 2.875-4.473 2.574-6.992-.2-1.677-1.036-2.927-2.353-3.52-.953-.43-1.982-.397-2.888-.366h-.01a24 24 0 0 1-.518.014c-1.078.014-2.157.047-3.236.085-2.025.072-4.05.168-6.074.264H6.36l-.044.002q0-.228-.003-.449C6.368 4.353 4.582 3.542 3.63 3.4a.75.75 0 1 0-.221 1.483c.059.01 1.439.23 1.405 1.52.02.868-.053 1.847-.132 2.883v.002c-.23 3.02-.489 6.442 1.772 8.051 1.697 1.21 4.033 1.417 5.878 1.463M6.186 9.298a83 83 0 0 0 .068-.939l.179-.008a513 513 0 0 1 6.067-.264c1.067-.038 2.136-.07 3.202-.084q.27-.005.546-.014h.012l.018-.001c.808-.025 1.574-.049 2.205.235.843.38 1.34 1.163 1.48 2.33.236 1.985-.7 4.616-2.005 5.63-1.412 1.097-3.863 1.166-5.588 1.12-1.632-.04-3.68-.213-5.045-1.185-1.572-1.12-1.356-3.966-1.147-6.718z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M5.988 21.313a1.296 1.296 0 1 0 1.296-1.294c-.715 0-1.296.58-1.296 1.294M16.32 21.313c0 .714.581 1.295 1.295 1.295s1.295-.581 1.295-1.295c0-.713-.58-1.294-1.295-1.294-.714 0-1.295.58-1.295 1.294"
    />
  </Svg>
);
export default IconlystBuyOutlinecurved;
