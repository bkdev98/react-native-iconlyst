import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystCoconutBabanaLight = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20.328 12.454c0 2.627-1.193 4.858-3.041 6.25m3.04-5.769c0-4.468-3.448-7.788-7.702-7.788-2.802 0-5.255 1.44-6.602 3.701"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.956 8.992c.42 1.985.133 3.86-.21 5.035M10.554 16.08a12.3 12.3 0 0 1-.451-2.623"
    />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M18.925 8.502c-.96 1.207-3.343 1.405-4.21 0-.96 1.207-3.343 1.405-4.21 0-.96 1.207-3.343 1.405-4.21 0M12.524 3.428c.22.441.594 1.686.33 3.13M14.335 3c-.317.213-1.166.56-2.031.243-.635-.233-1.102-.196-1.373-.107M10.847 16.554a10.1 10.1 0 0 1-4.029-4.259c-.506-1.012-.883-1.233-.883-2.365v-.79c0-.818-1.64-.789-1.64 0v.95c0 .904-.443 1.286-.559 2.183a7.82 7.82 0 0 0 2.667 6.935C7.784 20.392 10.1 21 11.828 21c1.342 0 5.552-.68 5.126-2.267-.122-.455-.281-.55-.527-.673-.337-.167-.782-.179-1.234-.185-1.505-.021-3.05-.58-4.346-1.321"
    />
  </Svg>
);
export default IconlystCoconutBabanaLight;
