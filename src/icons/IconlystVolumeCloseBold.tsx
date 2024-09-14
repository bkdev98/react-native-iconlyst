import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVolumeCloseBold = ({
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
      d="M11.481 20.153a3.16 3.16 0 0 1-1.678-.493l-3.067-1.918c-.258-.162-.649-.266-.997-.266-.378-.027-.67-.038-.923-.048h-.028c-.91-.034-1.513-.056-2.312-.714-1.04-.872-1.036-2.84-1.03-4.424v-.59c-.006-1.578-.012-3.543 1.027-4.412.797-.664 1.403-.686 2.32-.718l.071-.003c.242-.009.515-.02.833-.043.374-.025.773-.099 1.04-.266L9.803 4.34c.972-.607 2.11-.656 3.12-.136 1.073.553 1.787 1.666 1.862 2.904a67 67 0 0 1 0 9.788 3.47 3.47 0 0 1-1.84 2.891c-.47.245-.969.366-1.465.366M21.275 14.379c.146.147.338.22.53.22a.749.749 0 0 0 .53-1.28l-1.319-1.32 1.315-1.315a.75.75 0 1 0-1.06-1.061l-1.316 1.315-1.316-1.316a.749.749 0 1 0-1.06 1.06L18.894 12l-1.314 1.314a.75.75 0 0 0 1.06 1.06l1.315-1.314z"
    />
  </Svg>
);
export default IconlystVolumeCloseBold;
