import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystWeightOutline = ({
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
      d="M12.947 7.001c-.534.573-.992 1.422-1.279 2.47v.003a9.4 9.4 0 0 0-.332 2.521c0 .909.117 1.754.331 2.52l.001.005c.287 1.048.746 1.9 1.28 2.475.533.573 1.107.842 1.662.842.867 0 1.824-.702 2.499-2.16a.75.75 0 0 1 1.361.629c-.782 1.691-2.139 3.03-3.86 3.03-1.077 0-2.024-.528-2.76-1.32-.734-.79-1.292-1.873-1.628-3.099a10.9 10.9 0 0 1-.386-2.922c0-1.025.134-2.016.386-2.922.336-1.226.894-2.307 1.628-3.094.737-.791 1.684-1.316 2.76-1.316 1.727 0 3.086 1.326 3.87 3.033a.75.75 0 0 1-1.362.626c-.673-1.463-1.63-2.159-2.508-2.159-.557 0-1.13.268-1.663.838M4.45 11.554a.446.446 0 1 0 0 .892h2.189a.75.75 0 0 1 0 1.5h-2.19a1.946 1.946 0 1 1 0-3.892h2.19a.75.75 0 0 1 0 1.5z"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.102 6.953c.803-1.315 2.013-2.288 3.484-2.288h4.02a.75.75 0 0 1 0 1.5h-4.02c-.75 0-1.551.5-2.204 1.57C7.738 8.79 7.314 10.296 7.314 12s.424 3.209 1.068 4.265c.653 1.068 1.453 1.569 2.204 1.569h4.02a.75.75 0 0 1 0 1.5h-4.02c-1.471 0-2.681-.973-3.484-2.288-.81-1.327-1.288-3.113-1.288-5.046s.477-3.72 1.288-5.047"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.78 11.56a.44.44 0 0 0 0 .881h4.274c.246 0 .446-.199.446-.445a.443.443 0 0 0-.446-.436zm-1.94.44a1.94 1.94 0 0 1 1.94-1.94h4.274c1.07 0 1.946.865 1.946 1.936 0 1.074-.871 1.945-1.946 1.945h-4.273a1.94 1.94 0 0 1-1.941-1.94"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystWeightOutline;
