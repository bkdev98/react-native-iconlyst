import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTextDirectionLTROutline = ({
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
      d="M16.718 16.552a.75.75 0 0 1 1.06 0l2.342 2.341a.75.75 0 0 1 0 1.06l-2.342 2.342a.75.75 0 1 1-1.06-1.06l1.06-1.061H5.41a.75.75 0 0 1 0-1.5H17.78l-1.061-1.062a.75.75 0 0 1 0-1.06M5.269 7.42a4.404 4.404 0 0 1 4.403-4.404h6.785a.75.75 0 1 1 0 1.5H9.673a2.904 2.904 0 0 0 0 5.807h.522a.75.75 0 0 1 0 1.5h-.522A4.404 4.404 0 0 1 5.27 7.419"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M14.37 3.016a.75.75 0 0 1 .75.75v11.483a.75.75 0 0 1-1.5 0V3.765a.75.75 0 0 1 .75-.75M10.195 3.016a.75.75 0 0 1 .75.75v11.483a.75.75 0 0 1-1.5 0V3.765a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTextDirectionLTROutline;
