import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystAngryHornsBold = ({
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
      d="M17.167 10.349c-.024.38-.168 1.66-1.002 2.148a2.05 2.05 0 0 1-1.036.269c-.76 0-1.5-.365-1.853-.787-.289-.345-.315-.724-.069-1.013.602-.71 3.241-2.344 3.646-2.025.356.274.331 1.147.314 1.408m-2.467 5.71a.75.75 0 0 1-.935.5c-1.39-.422-2.521-.431-3.452-.029a.75.75 0 1 1-.594-1.377c1.27-.549 2.737-.558 4.481-.03a.75.75 0 0 1 .5.936m-6.867-3.562c-.833-.487-.978-1.765-1.002-2.145-.017-.261-.044-1.136.314-1.411.397-.319 3.043 1.315 3.645 2.026.246.288.22.667-.069 1.012-.354.422-1.093.787-1.852.787-.353 0-.712-.08-1.036-.269m13.049-3.856c1.536-4.178-.662-5.959-.758-6.035a.502.502 0 0 0-.807.359c-.07 1.008-.737 1.556-1.169 1.807A9.46 9.46 0 0 0 12 2.5a9.46 9.46 0 0 0-6.149 2.272c-.431-.251-1.098-.799-1.168-1.806a.503.503 0 0 0-.807-.36c-.096.076-2.294 1.857-.759 6.035A9.5 9.5 0 0 0 2.5 12c0 5.239 4.262 9.5 9.5 9.5s9.5-4.261 9.5-9.5a9.4 9.4 0 0 0-.618-3.359"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystAngryHornsBold;
