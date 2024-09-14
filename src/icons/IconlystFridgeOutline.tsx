import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFridgeOutline = ({
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
      d="M6.245 3.298C6.877 2.62 7.77 2.25 8.8 2.25h6.4c1.032 0 1.926.37 2.558 1.048.627.673.94 1.589.94 2.59v12.224c0 1.001-.314 1.917-.94 2.59-.632.679-1.526 1.048-2.559 1.048H8.8c-1.031 0-1.925-.37-2.556-1.048-.626-.673-.94-1.589-.94-2.59V5.888c0-1.002.315-1.918.942-2.59m1.097 1.023c-.325.348-.539.876-.539 1.567v12.224c0 .691.214 1.22.538 1.568.318.342.798.57 1.459.57h6.4c.662 0 1.142-.229 1.46-.57.324-.349.538-.877.538-1.568V5.888c0-.691-.214-1.22-.538-1.568-.318-.342-.798-.57-1.46-.57H8.8c-.658 0-1.138.228-1.458.57"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.531 7.474a.75.75 0 0 1 .75-.75h1.76a.75.75 0 0 1 0 1.5h-1.76a.75.75 0 0 1-.75-.75M12.531 12.498a.75.75 0 0 1 .75-.75h1.76a.75.75 0 1 1 0 1.5h-1.76a.75.75 0 0 1-.75-.75M5.303 9.987a.75.75 0 0 1 .75-.75h11.895a.75.75 0 0 1 0 1.5H6.053a.75.75 0 0 1-.75-.75"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFridgeOutline;
