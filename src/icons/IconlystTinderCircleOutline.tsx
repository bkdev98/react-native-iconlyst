import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystTinderCircleOutline = ({
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
      d="M12 3.75A8.25 8.25 0 0 0 3.75 12 8.25 8.25 0 0 0 12 20.25 8.25 8.25 0 0 0 20.25 12 8.25 8.25 0 0 0 12 3.75M2.25 12A9.75 9.75 0 0 1 12 2.25 9.75 9.75 0 0 1 21.75 12 9.75 9.75 0 0 1 12 21.75 9.75 9.75 0 0 1 2.25 12"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M11.879 6.384a.75.75 0 0 1 .778-.047c1.502.793 2.831 1.928 3.62 3.582.757 1.495.835 3.245.275 4.712-.565 1.483-1.793 2.69-3.607 3-4.747 1.033-7.883-4.818-4.342-8.235.163-.162.638-.61.875-.782a.75.75 0 0 1 1.19.608c0 .12.044.469.13.799l.01.04c.233-.112.423-.349.573-.752.229-.617.279-1.458.182-2.213a.75.75 0 0 1 .316-.712m-.963 3.98-.002-.002zm2.173-1.989a5.4 5.4 0 0 1-.302 1.456c-.344.928-1.075 1.808-2.349 1.808a.9.9 0 0 1-.646-.287 1.4 1.4 0 0 1-.225-.33 3 3 0 0 1-.133-.327c-2.125 2.402.042 6.168 3.206 5.468l.038-.008c1.238-.206 2.072-1.006 2.473-2.058.408-1.07.356-2.383-.216-3.508l-.008-.018c-.423-.889-1.056-1.608-1.838-2.196"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystTinderCircleOutline;
