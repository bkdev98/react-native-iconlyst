import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystChatSearchBulk = ({
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
      d="M17.362 3.123H7.24a4.2 4.2 0 0 0-4.19 4.202v6.939c0 2.317 1.88 4.203 4.19 4.203h1.068c.503 0 .994.204 1.348.561l1.422 1.425c.327.328.76.509 1.223.509.46 0 .896-.181 1.222-.509l1.422-1.426c.355-.356.846-.56 1.348-.56h1.068c2.31 0 4.189-1.886 4.189-4.203V7.325c0-2.317-1.88-4.202-4.19-4.202"
      clipRule="evenodd"
      opacity={0.4}
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M15.432 14.564a.75.75 0 0 0 .531-1.28l-1.038-1.04a3.556 3.556 0 0 0-.471-4.425 3.5 3.5 0 0 0-2.5-1.04c-.945 0-1.833.369-2.501 1.04a3.556 3.556 0 0 0 0 5.01 3.5 3.5 0 0 0 2.502 1.04c.688 0 1.346-.197 1.91-.564l1.036 1.04c.147.146.339.22.53.22m-4.917-5.686a2.02 2.02 0 0 1 1.439-.6c.542 0 1.052.214 1.437.6a2.053 2.053 0 0 1 0 2.893 2.02 2.02 0 0 1-1.437.597 2.02 2.02 0 0 1-1.439-.597 2.053 2.053 0 0 1 0-2.893"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystChatSearchBulk;
