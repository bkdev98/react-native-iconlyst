import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDirectionRightOutline = ({
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
      d="m15.736 3.843 4.672 4.671c.976.977 1.545 2.16 1.588 3.39.044 1.238-.45 2.443-1.445 3.438L15.593 20.3c-.997.998-2.202 1.491-3.44 1.447-1.231-.044-2.412-.614-3.388-1.59l-4.672-4.672c-.975-.975-1.546-2.156-1.59-3.386-.043-1.239.45-2.444 1.448-3.441L8.91 3.699c.998-.997 2.203-1.49 3.44-1.446 1.231.044 2.412.615 3.387 1.59m-3.44-.091c-.778-.028-1.59.272-2.326 1.008L5.012 9.718c-.736.736-1.037 1.549-1.01 2.328.029.787.396 1.623 1.152 2.378l4.672 4.673c.756.756 1.593 1.123 2.38 1.151.778.028 1.59-.273 2.326-1.008l4.959-4.959c.732-.732 1.033-1.545 1.006-2.325-.028-.788-.394-1.625-1.15-2.38l-4.672-4.672c-.756-.757-1.592-1.124-2.379-1.152"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.76 12.37a2.33 2.33 0 0 1 2.332-2.33h4.799a.75.75 0 1 1 0 1.5h-4.8a.83.83 0 0 0-.83.83v3.02a.75.75 0 1 1-1.5 0z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M13.172 8.076a.75.75 0 0 1 1.06-.002l2.19 2.182a.75.75 0 0 1 0 1.062l-2.19 2.18a.75.75 0 0 1-1.058-1.063l1.656-1.648-1.656-1.65a.75.75 0 0 1-.002-1.06"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDirectionRightOutline;
