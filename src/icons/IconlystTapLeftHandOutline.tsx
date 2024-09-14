import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTapLeftHandOutline = ({
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
      d="M13.494 5.25c.462 0 .837.375.837.837v9.104a.75.75 0 0 0 1.367.425l1.136-1.647a.985.985 0 0 1 1.164-.36c.487.186.713.694.552 1.136-.552 1.525-1.427 3.22-2.54 4.603-.708.881-2.29 1.405-4.107 1.402-1.807-.003-3.487-.53-4.295-1.338-.672-.672-1.235-1.74-1.517-2.946-.283-1.203-.268-2.465.12-3.515.327-.879 1.07-1.35 2.152-1.624.819-.206 1.698-.27 2.58-.334q.488-.033.972-.078a.75.75 0 0 0 .679-.735l.063-4.106a.837.837 0 0 1 .837-.824m2.337.837a2.337 2.337 0 0 0-4.674-.036l-.053 3.425-.156.011c-.913.066-1.994.144-2.951.386-1.305.329-2.62 1.011-3.192 2.557-.514 1.39-.507 2.962-.175 4.379.332 1.414 1.006 2.752 1.918 3.664 1.212 1.213 3.367 1.773 5.352 1.777 1.973.004 4.14-.545 5.28-1.962 1.234-1.536 2.183-3.383 2.78-5.031.457-1.26-.222-2.588-1.425-3.05a2.49 2.49 0 0 0-2.704.622z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.497 3.25c1.516 0 2.808 1.302 2.808 2.987 0 1.138-.596 2.113-1.453 2.617a.75.75 0 0 0 .76 1.293c1.318-.776 2.193-2.244 2.193-3.91 0-2.443-1.895-4.487-4.308-4.487-2.414 0-4.308 2.044-4.308 4.487 0 1.64.846 3.087 2.129 3.872a.75.75 0 0 0 .782-1.28c-.835-.51-1.411-1.473-1.411-2.592 0-1.685 1.291-2.987 2.808-2.987"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTapLeftHandOutline;
