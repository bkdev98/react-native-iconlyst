import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystMessagesTranslateOutline = ({
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
      d="M12.223 22.173a9.7 9.7 0 0 1-4.069-.892 3.2 3.2 0 0 0-.98-.3 3.8 3.8 0 0 0-1.053.267c-.764.263-1.812.627-2.568-.135s-.413-1.758-.139-2.564c.14-.342.228-.703.265-1.07a3.2 3.2 0 0 0-.3-1 9.83 9.83 0 0 1 1.967-11 9.67 9.67 0 0 1 6.9-2.864 9.67 9.67 0 0 1 6.894 2.863 9.775 9.775 0 0 1-6.917 16.69zm-5.054-2.69a4.2 4.2 0 0 1 1.598.43 8.276 8.276 0 0 0 9.31-13.372 8.18 8.18 0 0 0-5.833-2.42 8.18 8.18 0 0 0-5.833 2.421 8.34 8.34 0 0 0-1.653 9.345c.24.5.382 1.04.42 1.593a5 5 0 0 1-.344 1.553c-.1.278-.316.928-.22 1.024s.74-.13 1.017-.225a4.9 4.9 0 0 1 1.538-.349"
    />
    <Path
      fill={props.color}
      d="M9.23 16.948a.75.75 0 0 1-.22-1.468 6.4 6.4 0 0 0 2.296-1.237 8.2 8.2 0 0 1-1.11-1.555.751.751 0 0 1 1.127-.946.8.8 0 0 1 .188.224q.341.626.806 1.168a7.05 7.05 0 0 0 1.126-2.636H8.928a.75.75 0 0 1 0-1.5h2.567v-.393a.75.75 0 1 1 1.5 0V9h2.566a.75.75 0 0 1 0 1.5h-.584a9 9 0 0 1-.6 2.047 8 8 0 0 1-.923 1.6 5.3 5.3 0 0 0 1.8.77.75.75 0 1 1-.328 1.463 6.7 6.7 0 0 1-2.492-1.12 7.86 7.86 0 0 1-2.985 1.659.8.8 0 0 1-.22.03"
    />
  </Svg>
);
export default IconlystMessagesTranslateOutline;
