import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcentwalletOutline = ({
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
      d="M11.299 2.487a1.77 1.77 0 0 1 1.767 0l6.912 3.991c.547.316.883.9.883 1.53v7.983c0 .632-.336 1.215-.883 1.53l-6.912 3.992a1.77 1.77 0 0 1-1.767 0l-6.915-3.991a1.77 1.77 0 0 1-.884-1.53V8.008c0-.632.337-1.215.884-1.531zm1.017 1.299a.27.27 0 0 0-.267 0L5.134 7.777A.27.27 0 0 0 5 8.01v7.982c0 .096.051.184.134.232l6.915 3.991a.27.27 0 0 0 .267 0l6.912-3.991a.27.27 0 0 0 .133-.232V8.01a.27.27 0 0 0-.133-.232z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.692 2.387a.75.75 0 0 1 .75.75v3.267a.75.75 0 0 1-.38.652l-4.621 2.63a.27.27 0 0 0-.132.23v4.168c0 .096.05.184.133.232l3.607 2.083a.27.27 0 0 0 .268 0l3.607-2.084a.27.27 0 0 0 .134-.231v-1.496a.27.27 0 0 0-.134-.232l-2.96-1.71a.75.75 0 1 1 .75-1.298l2.96 1.71c.547.315.884.898.884 1.53v1.496c0 .631-.337 1.215-.884 1.53l-3.607 2.084a1.77 1.77 0 0 1-1.768 0l-3.607-2.084a1.77 1.77 0 0 1-.883-1.53V9.917c0-.632.336-1.215.883-1.53l.004-.003 4.246-2.416V3.137a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.715 9.347a.75.75 0 0 1 .375.65v2.67a.75.75 0 0 1-.375.65l-2.313 1.335a.75.75 0 0 1-1.125-.65v-2.67a.75.75 0 0 1 .375-.65l2.313-1.335a.75.75 0 0 1 .75 0m-1.938 2.418v.938l.813-.469v-.939zM16.092 14.095a.75.75 0 0 1 1.04-.207l3.167 2.118a.75.75 0 1 1-.834 1.247l-3.167-2.118a.75.75 0 0 1-.206-1.04M8.284 14.095a.75.75 0 0 0-1.04-.207l-3.168 2.118a.75.75 0 0 0 .834 1.247l3.167-2.118a.75.75 0 0 0 .207-1.04"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.238 3.861a.75.75 0 0 1 .75.75v4.336a.75.75 0 0 1-.387.657l-1.89 1.043a.75.75 0 1 1-.726-1.313l1.503-.83V4.611a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcentwalletOutline;
