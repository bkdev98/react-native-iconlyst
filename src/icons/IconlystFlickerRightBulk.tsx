import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystFlickerRightBulk = ({
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
      d="M20.53 9.717c-.69-.39-1.639-.123-2.032.572l-2.056 3.635a.434.434 0 0 1-.578.16.423.423 0 0 1-.16-.577l3.526-6.233c.096-.17.16-.365.18-.548a1.4 1.4 0 0 0-.044-.58 1.5 1.5 0 0 0-1.836-1.039 1.5 1.5 0 0 0-.524.264 1.5 1.5 0 0 0-.374.433l-3.525 6.233a.435.435 0 0 1-.578.161.425.425 0 0 1-.16-.578l2.685-4.747c.192-.339.242-.742.143-1.135-.228-.783-1.068-1.255-1.839-1.043a1.5 1.5 0 0 0-.9.71L8.39 12.591a.42.42 0 0 1-.577.161.42.42 0 0 1-.16-.578l.993-1.773a.3.3 0 0 1 .03-.059 2.01 2.01 0 0 0-.759-2.734.93.93 0 0 0-.73-.089.95.95 0 0 0-.588.454l-1.976 3.493a7.22 7.22 0 0 0-.63 5.472 7.236 7.236 0 0 0 8.87 5.018 7.2 7.2 0 0 0 4.358-3.348l3.881-6.86c.39-.69.123-1.639-.572-2.032"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.077 7.134a.747.747 0 0 0 1.036-.226c.795-1.238 2.186-1.955 3.516-2.306l-.131.2a.75.75 0 1 0 1.258.817l1.05-1.621c.017-.024.02-.052.033-.078a.7.7 0 0 0 .054-.135 1 1 0 0 0 .022-.15c.002-.028.014-.055.013-.085-.002-.02-.012-.037-.015-.056s.003-.04-.001-.06c-.007-.032-.027-.058-.038-.09-.016-.043-.031-.085-.054-.124a.7.7 0 0 0-.094-.124 1 1 0 0 0-.094-.091c-.017-.013-.027-.033-.045-.044L8.966 1.91a.75.75 0 0 0-.817 1.259l.008.005C6.526 3.618 4.86 4.526 3.85 6.098a.75.75 0 0 0 .226 1.036"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystFlickerRightBulk;
