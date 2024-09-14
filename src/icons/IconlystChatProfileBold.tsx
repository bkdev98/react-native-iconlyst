import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatProfileBold = ({
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
      d="M12.292 7.571a2.244 2.244 0 0 0-2.235 2.247 2.244 2.244 0 0 0 2.235 2.246 2.244 2.244 0 0 0 2.236-2.246 2.244 2.244 0 0 0-2.236-2.247"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M12.292 13.564a3.745 3.745 0 0 1-3.735-3.746 3.745 3.745 0 0 1 3.735-3.747 3.745 3.745 0 0 1 3.736 3.747 3.745 3.745 0 0 1-3.736 3.746m5.07-10.441H7.242c-2.311 0-4.19 1.886-4.19 4.202v6.939c0 2.2 1.699 3.99 3.847 4.168-.003-.033-.018-.063-.017-.098.049-2.033 1.74-4.085 5.41-4.085 3.687 0 5.383 2.052 5.43 4.086 0 .034-.013.064-.017.097a4.19 4.19 0 0 0 3.847-4.168V7.325c0-2.316-1.88-4.202-4.188-4.202"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M16.221 18.37c-.027-1.21-1.073-2.621-3.93-2.621-2.84 0-3.882 1.413-3.91 2.62-.002.038-.018.068-.024.103a1.9 1.9 0 0 1 1.3.556l1.422 1.426c.326.328.761.508 1.223.508.46 0 .895-.18 1.22-.508l1.422-1.426c.35-.35.81-.543 1.3-.556-.006-.035-.021-.066-.023-.102"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatProfileBold;
