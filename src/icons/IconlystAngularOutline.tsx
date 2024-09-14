import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAngularOutline = ({
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
      d="M12.006 7.023c.3 0 .571.18.69.455l3.244 7.584a.75.75 0 1 1-1.38.59l-.53-1.241H9.973l-.534 1.242a.75.75 0 1 1-1.378-.592l3.256-7.583a.75.75 0 0 1 .69-.455m-1.39 5.888h2.772l-1.383-3.234z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.067 2.44a2.8 2.8 0 0 1 2.046.008l6.223 2.47a2.8 2.8 0 0 1 1.748 2.93l-1.009 8.515a2.8 2.8 0 0 1-1.413 2.114l-5.216 2.917a2.8 2.8 0 0 1-2.715.01l-5.33-2.93a2.8 2.8 0 0 1-1.43-2.109L2.918 7.873a2.8 2.8 0 0 1 1.765-2.955zm1.492 1.402a1.3 1.3 0 0 0-.95-.004L5.227 6.317a1.3 1.3 0 0 0-.82 1.371l1.053 8.493a1.3 1.3 0 0 0 .664.979l5.33 2.93a1.3 1.3 0 0 0 1.261-.005l5.215-2.917a1.3 1.3 0 0 0 .657-.981l1.008-8.515a1.3 1.3 0 0 0-.811-1.36z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAngularOutline;
