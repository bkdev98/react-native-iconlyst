import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcoumentBarChartOutline = ({
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
      d="M14.77 2.432a.75.75 0 0 1 .75.75v2.892a1.81 1.81 0 0 0 1.805 1.81h2.738a.75.75 0 0 1 0 1.5h-2.741a3.31 3.31 0 0 1-3.302-3.31V3.182a.75.75 0 0 1 .75-.75M15.33 11.326a.75.75 0 0 1 .75.75v3.696a.75.75 0 1 1-1.5 0v-3.696a.75.75 0 0 1 .75-.75M9.67 9.97a.75.75 0 0 1 .75.75v5.052a.75.75 0 0 1-1.5 0v-5.051a.75.75 0 0 1 .75-.75M12.5 13.136a.75.75 0 0 1 .75.75v1.886a.75.75 0 0 1-1.5 0v-1.886a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M16.5 21.87H8.544a4.5 4.5 0 0 1-4.42-4.6V6.775A4.523 4.523 0 0 1 8.618 2.37h5.668a2.81 2.81 0 0 1 2.02.861l3.79 3.95c.503.52.782 1.215.78 1.938v8.164A4.544 4.544 0 0 1 16.5 21.87m-7.879-18a3.01 3.01 0 0 0-3 2.924v10.488a3 3 0 0 0 2.937 3.086h7.91a3.044 3.044 0 0 0 2.905-3.082V9.12c.001-.335-.129-.658-.362-.9l-3.79-3.95a1.3 1.3 0 0 0-.938-.4H8.618z"
    />
  </Svg>
);
export default IconlystDcoumentBarChartOutline;
