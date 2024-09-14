import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystReloadLockOutline = ({
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
      fillRule="evenodd"
      d="M3.257 19.245a2.716 2.716 0 1 1 5.432 0 2.716 2.716 0 0 1-5.432 0m2.716-1.216a1.216 1.216 0 1 0 0 2.433 1.216 1.216 0 0 0 0-2.433M15.898 6.612a2.716 2.716 0 1 1 5.432 0 2.716 2.716 0 0 1-5.432 0m2.716-1.216a1.216 1.216 0 1 0 0 2.433 1.216 1.216 0 0 0 0-2.433"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.253 4.717a8.245 8.245 0 0 0-8.254 8.238.75.75 0 0 1-1.5-.002 9.745 9.745 0 0 1 9.754-9.736 9.7 9.7 0 0 1 5.23 1.526.75.75 0 1 1-.809 1.264 8.2 8.2 0 0 0-4.421-1.29M21.25 12.217a.75.75 0 0 1 .75.75c0 5.386-4.358 9.754-9.745 9.754a9.7 9.7 0 0 1-5.23-1.525.75.75 0 0 1 .808-1.264 8.2 8.2 0 0 0 4.422 1.289c4.557 0 8.246-3.695 8.246-8.254a.75.75 0 0 1 .75-.75"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M9.397 11.61a2.853 2.853 0 1 1 5.706 0c0 .741-.286 1.41-.744 1.912l.497 1.497a1.642 1.642 0 0 1-1.557 2.16H11.2a1.642 1.642 0 0 1-1.557-2.16l.497-1.497a2.83 2.83 0 0 1-.743-1.912m2.853-1.354c-.747 0-1.352.605-1.352 1.354 0 .441.214.833.553 1.084a.75.75 0 0 1 .266.84l-.65 1.958a.142.142 0 0 0 .133.187H13.3a.142.142 0 0 0 .134-.187l-.651-1.959a.75.75 0 0 1 .266-.84c.34-.25.555-.643.555-1.083 0-.748-.606-1.354-1.353-1.354"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystReloadLockOutline;
