import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSketchSquareOutline = ({
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
      d="M16.21 21.75H7.78c-3.31 0-5.53-2.32-5.53-5.77V8.03c0-3.46 2.22-5.78 5.53-5.78h8.44c3.31 0 5.53 2.32 5.53 5.78v7.95c0 3.45-2.22 5.77-5.53 5.77zm-8.43-18c-2.45 0-4.03 1.68-4.03 4.28v7.95c0 2.59 1.58 4.27 4.03 4.27h8.43c2.45 0 4.03-1.68 4.03-4.27V8.03c0-2.6-1.58-4.28-4.03-4.28H7.77z"
    />
    <Path
      fill={props.color}
      d="M12 16.6c-.43 0-.84-.19-1.12-.51l-3.46-3.8c-.52-.58-.58-1.45-.14-2.08l1.4-2.05c.32-.46.84-.73 1.39-.73h3.89c.55 0 1.07.27 1.39.72l1.4 2.07c.43.63.37 1.5-.15 2.08l-3.47 3.81c-.28.31-.69.5-1.12.5zm-3.48-5.32 3.47 3.81 3.49-3.81c.05-.06.06-.15.02-.22l-1.4-2.07s-.09-.07-.15-.07h-3.89c-.06 0-.12.03-.15.08l-1.4 2.05c-.05.07-.04.16.02.22z"
    />
  </Svg>
);
export default IconlystSketchSquareOutline;
