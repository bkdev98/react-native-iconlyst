import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPhoneCallRingingBold = ({
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
      d="M19.802 14.91q-.361-.341-.775-.749c-1.28-1.279-2.385-.846-3.272-.497-1.062.416-2.065.81-3.896-1.023-1.83-1.827-1.438-2.83-1.022-3.894.347-.89.78-1.997-.499-3.275a43 43 0 0 1-.767-.793c-.938-.986-1.616-1.699-2.57-1.71h-.024c-.82 0-1.68.524-2.958 1.802-.013.013-.078.078-.089.092-.286.28-1.046 1.023-1.055 2.474-.013 2.266 1.814 5.248 5.43 8.861 3.6 3.601 6.572 5.426 8.833 5.426h.024c1.451-.009 2.194-.77 2.474-1.056l.093-.09c1.29-1.288 1.81-2.152 1.8-2.98-.013-.959-.732-1.643-1.727-2.588M14.236 5.915a.75.75 0 0 0 .75-.75v-2.04a.75.75 0 0 0-1.5 0v2.04c0 .414.336.75.75.75M17.885 7.365a.75.75 0 0 0 .53-.22l1.443-1.44A.751.751 0 0 0 18.8 4.644l-1.444 1.44a.751.751 0 0 0 .53 1.282M21.375 9.515h-2.04a.75.75 0 0 0 0 1.5h2.04a.75.75 0 0 0 0-1.5"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystPhoneCallRingingBold;
