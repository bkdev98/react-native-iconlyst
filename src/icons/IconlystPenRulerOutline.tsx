import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystPenRulerOutline = ({
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
      d="M5.816 21.986a6 6 0 0 1-.554-.025 2.03 2.03 0 0 1-1.82-1.773 5.9 5.9 0 0 1 1.638-4.832L15.935 4.463a3.468 3.468 0 0 1 4.962 4.846L10.042 20.202a5.88 5.88 0 0 1-4.226 1.784m12.6-17.066h-.026a1.96 1.96 0 0 0-1.385.6L6.15 16.41a4.39 4.39 0 0 0-1.215 3.6.52.52 0 0 0 .467.454 4.37 4.37 0 0 0 3.574-1.317L19.831 8.253a1.968 1.968 0 0 0-1.415-3.336z"
    />
    <Path
      fill={props.color}
      d="M15.733 14.168a.74.74 0 0 1-.53-.22l-3.824-3.838a.75.75 0 1 1 1.062-1.058l3.824 3.837a.75.75 0 0 1-.532 1.28M5.435 12.438c-.2 0-.39-.08-.531-.22l-1.052-1.052a4.01 4.01 0 0 1 0-5.663l1.182-1.184A3.97 3.97 0 0 1 7.866 3.14a3.97 3.97 0 0 1 2.833 1.18l1.05 1.05a.75.75 0 1 1-1.06 1.062L9.637 5.38a2.48 2.48 0 0 0-1.771-.74 2.47 2.47 0 0 0-1.77.738L4.913 6.564a2.51 2.51 0 0 0 0 3.542l1.053 1.05a.751.751 0 0 1-.53 1.282M16.994 22.633a4.01 4.01 0 0 1-2.834-1.166l-1.04-1.042a.75.75 0 1 1 1.06-1.06l1.04 1.04a2.515 2.515 0 0 0 3.542 0l1.182-1.183a2.49 2.49 0 0 0 0-3.54l-1.04-1.042a.75.75 0 1 1 1.06-1.06l1.04 1.038a3.99 3.99 0 0 1 0 5.666l-1.182 1.181a3.98 3.98 0 0 1-2.828 1.168"
    />
  </Svg>
);
export default IconlystPenRulerOutline;
