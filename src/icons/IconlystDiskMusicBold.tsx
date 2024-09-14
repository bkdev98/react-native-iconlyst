import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDiskMusicBold = ({
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
      d="M9.845 2.25H5.422a.75.75 0 0 0 0 1.5h4.423c.989 0 1.794.804 1.794 1.793v12.914c0 .989-.805 1.793-1.794 1.793H5.422a.75.75 0 0 0 0 1.5h4.423a3.297 3.297 0 0 0 3.294-3.293V5.543A3.297 3.297 0 0 0 9.845 2.25"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M8.112 14.328c0-.039-.01-.075-.011-.114 0-.018.01-.033.01-.052v-4.46c.326.212.714.387 1.17.48a.75.75 0 1 0 .299-1.47c-1.072-.218-1.503-1.262-1.519-1.3a.75.75 0 0 0-1.45.269v4.215a2.7 2.7 0 0 0-1.241-.31 2.745 2.745 0 0 0-2.743 2.742A2.745 2.745 0 0 0 5.37 17.07a2.745 2.745 0 0 0 2.742-2.742M15.271 4.035a.752.752 0 0 0-.944.725v5.195c0 .265.139.51.367.645.409.243.674.792.674 1.398 0 .603-.271 1.17-.673 1.407a.75.75 0 0 0-.368.646v5.187a.75.75 0 0 0 .944.724A8.255 8.255 0 0 0 21.373 12a8.254 8.254 0 0 0-6.102-7.964"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDiskMusicBold;
