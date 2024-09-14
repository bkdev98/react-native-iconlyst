import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReceiptBillTimeOutline = ({
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
      d="M11.154 21.283a.747.747 0 0 1-.978.41L8 20.807a1.06 1.06 0 0 0-.86.023l-.769.37a1.97 1.97 0 0 1-2.822-1.78l.01-12.438c0-1.363.381-2.562 1.195-3.427a3.9 3.9 0 0 1 1.204-.862c.634-.295 1.368-.443 2.174-.443h7.409c1.389 0 2.556.436 3.37 1.309.808.865 1.179 2.064 1.179 3.423v4.291a.75.75 0 0 1-1.5 0v-4.29c0-1.098-.298-1.891-.775-2.403-.47-.504-1.203-.83-2.274-.83H8.133c-1.068 0-1.808.326-2.286.834-.19.203-.353.45-.48.74-.195.446-.306.996-.306 1.66L5.05 19.422a.47.47 0 0 0 .675.424l.77-.367.001-.002a2.56 2.56 0 0 1 2.073-.059l2.174.887a.75.75 0 0 1 .41.978"
    />
    <Path
      fill={props.color}
      d="M14.676 9.008a.75.75 0 0 1-.75.75H8.958a.75.75 0 1 1 0-1.5h4.968a.75.75 0 0 1 .75.75M11.713 12.867a.75.75 0 0 1-.75.75H8.958a.75.75 0 1 1 0-1.5h2.005a.75.75 0 0 1 .75.75M18.258 18.633a.75.75 0 0 1-1.028.26l-1.175-.702a.75.75 0 0 1-.366-.642v-1.512a.746.746 0 0 1 .75-.75c.414 0 .75.334.75.75v1.086l.81.482c.356.211.472.672.26 1.028"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M20.927 17.283c0 2.465-2 4.467-4.467 4.467a4.468 4.468 0 0 1 0-8.934c2.468 0 4.467 2 4.467 4.467M16.46 20.25a2.967 2.967 0 1 0 0-5.933 2.967 2.967 0 0 0 0 5.933"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReceiptBillTimeOutline;
