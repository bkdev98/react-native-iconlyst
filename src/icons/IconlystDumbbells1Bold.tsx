import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbells1Bold = ({
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
      d="M20.495 13.961c-.683-.434-3.233-.465-4.007.07-.484.334-.781.866-.823 1.495l-5.306.054c-.097-.649-.402-1.159-.883-1.477-.782-.52-3.331-.438-3.988 0-.608.365-.981 1.027-.96 3.191.024 2.161.409 2.815 1.006 3.16.335.212 1.118.328 1.92.328.836 0 1.692-.126 2.086-.399.485-.335.78-.866.823-1.495l5.3-.096c.09.67.398 1.194.889 1.518.783.52 3.334.437 3.989.001.608-.366.98-1.027.959-3.19-.023-2.162-.41-2.816-1.005-3.16M7.112 10.172c.531-.258.904-.739 1.04-1.353l5.252.71c-.01.672.214 1.237.65 1.635.501.454 1.952.738 2.992.738.406 0 .75-.043.95-.137.658-.27 1.126-.868 1.431-3.009.304-2.14.021-2.845-.515-3.272-.607-.535-3.122-.952-3.972-.54-.527.258-.9.738-1.04 1.354L8.647 5.55c.002-.657-.223-1.208-.649-1.595-.698-.632-3.23-.934-3.944-.602-.656.27-1.125.867-1.429 3.008-.306 2.142-.023 2.847.515 3.275.61.534 3.126.95 3.972.536"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDumbbells1Bold;
