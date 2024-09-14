import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystSatelliteBold = ({
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
      d="M12.896 18.433a.305.305 0 0 0-.28-.197c-1.18-.02-2.336-.223-3.433-.678-.807-.337-1.673-.794-2.344-1.399-.155-.14-.407-.104-.502.08l-1.704 3.319c-.22.45-.2.97.06 1.39.26.43.71.68 1.21.68h6.14c.46 0 .9-.22 1.16-.6.27-.39.33-.88.17-1.32zM13.471 6.53c.944.236 1.628.915 1.828 1.815a.75.75 0 0 0 1.465-.326c-.322-1.445-1.445-2.573-2.93-2.944a.754.754 0 0 0-.909.545c-.1.402.144.809.546.91M19.494 6.878c-.572-2.254-2.32-3.973-4.563-4.486a.75.75 0 1 0-.334 1.462c1.69.387 3.01 1.687 3.444 3.393a.75.75 0 1 0 1.453-.37M8.376 4.249a1.44 1.44 0 0 0-1.139-.435 1.33 1.33 0 0 0-.979.526A8.2 8.2 0 0 0 5.22 6.143a8.06 8.06 0 0 0 .001 6.152 8.04 8.04 0 0 0 4.344 4.339 8 8 0 0 0 3.074.609 8 8 0 0 0 3.073-.608 8.2 8.2 0 0 0 1.805-1.037c.313-.243.5-.594.525-.991a1.47 1.47 0 0 0-.433-1.128z"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystSatelliteBold;
