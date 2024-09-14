import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystVideoChatBold = ({
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
      d="M12.268 9.843a.8.8 0 0 0-.297-.064.46.46 0 0 0-.228.055c-.15.087-.202.262-.22.394a16.7 16.7 0 0 0 .003 3.565c.012.094.058.291.208.38.125.074.324.066.54-.019a8.8 8.8 0 0 0 2.577-1.62c.129-.118.283-.307.282-.536 0-.229-.154-.417-.282-.533a8.7 8.7 0 0 0-2.583-1.622"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.86 13.644-.002.002c-.882.8-1.928 1.456-3.025 1.9-.3.12-.6.18-.89.18-.348 0-.679-.088-.972-.26-.52-.307-.852-.84-.936-1.502-.14-1.368-.14-2.68 0-3.918.088-.673.428-1.205.958-1.51.542-.313 1.216-.34 1.848-.079a10.2 10.2 0 0 1 3.02 1.901c.495.447.77 1.03.771 1.638s-.273 1.192-.773 1.648m3.693-8.367c-3.704-3.703-9.73-3.703-13.434 0-2.809 2.808-3.573 7.118-1.913 10.7.19.473.315.804.315 1.083 0 .335-.142.751-.279 1.152-.264.778-.564 1.66.08 2.301.645.645 1.525.343 2.302.075.4-.136.811-.278 1.141-.278.278 0 .621.132 1.054.3l.03.011a9.52 9.52 0 0 0 10.705-1.907c3.703-3.703 3.703-9.73 0-13.437"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystVideoChatBold;
