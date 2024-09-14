import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatSearchBold = ({
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
      d="M11.954 8.279a2.02 2.02 0 0 0-1.439.599 2.053 2.053 0 0 0 0 2.893 2.02 2.02 0 0 0 1.439.597c.542 0 1.053-.212 1.437-.597a2.053 2.053 0 0 0 0-2.893 2.02 2.02 0 0 0-1.437-.6"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.962 14.345a.747.747 0 0 1-1.061-.001l-1.035-1.039a3.5 3.5 0 0 1-1.911.563 3.5 3.5 0 0 1-2.502-1.039 3.556 3.556 0 0 1 0-5.011 3.5 3.5 0 0 1 2.5-1.039c.945 0 1.833.369 2.5 1.04a3.556 3.556 0 0 1 .472 4.424l1.038 1.041a.75.75 0 0 1-.001 1.061m1.4-11.222H7.24a4.2 4.2 0 0 0-4.19 4.202v6.939c0 2.317 1.88 4.203 4.19 4.203h1.068c.503 0 .994.204 1.348.561l1.422 1.425c.327.328.76.509 1.223.509.46 0 .896-.181 1.222-.509l1.422-1.426c.355-.356.846-.56 1.348-.56h1.068c2.31 0 4.189-1.886 4.189-4.203V7.325c0-2.317-1.88-4.202-4.19-4.202"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatSearchBold;
