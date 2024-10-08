import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst7DaysWarrantyOutline = ({
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
      d="M12.251 21.753a2.95 2.95 0 0 1-2.078-.852l-.712-.713a1.44 1.44 0 0 0-1.02-.42h-1a2.953 2.953 0 0 1-2.949-2.95v-1.006a1.44 1.44 0 0 0-.42-1.019l-.7-.7a2.95 2.95 0 0 1-.018-4.166l.02-.019.694-.7c.269-.271.42-.637.421-1.019V7.12a2.955 2.955 0 0 1 2.947-2.88h1c.383 0 .75-.152 1.021-.422l.7-.7a2.957 2.957 0 0 1 4.172-.012l.711.711a1.43 1.43 0 0 0 1.02.42h1a2.954 2.954 0 0 1 2.95 2.95v1c0 .382.152.749.421 1.021l.7.7a2.954 2.954 0 0 1 .013 4.17l-.713.711a1.44 1.44 0 0 0-.419 1.018v1a2.954 2.954 0 0 1-2.949 2.946h-1.006a1.43 1.43 0 0 0-1.019.422l-.7.7a2.93 2.93 0 0 1-2.087.88M4.418 10.987a1.45 1.45 0 0 0 .014 2.043l.7.7a2.92 2.92 0 0 1 .86 2.078v1.006a1.45 1.45 0 0 0 1.448 1.45h1a2.93 2.93 0 0 1 2.08.86l.7.7a1.454 1.454 0 0 0 2.057 0l.705-.7a2.92 2.92 0 0 1 2.078-.86h1.005a1.453 1.453 0 0 0 1.45-1.448v-1a2.92 2.92 0 0 1 .857-2.077l.7-.7a1.455 1.455 0 0 0 0-2.057l-.7-.7a2.94 2.94 0 0 1-.859-2.08v-1a1.45 1.45 0 0 0-1.45-1.45h-1a2.93 2.93 0 0 1-2.079-.858l-.7-.7a1.455 1.455 0 0 0-2.059 0l-.7.7a2.93 2.93 0 0 1-2.08.86h-1a1.453 1.453 0 0 0-1.449 1.45V8.2a2.93 2.93 0 0 1-.858 2.078l-.7.7z"
    />
    <Path
      fill={props.color}
      d="M11.984 16.03a.74.74 0 0 1-.664-.4.75.75 0 0 1-.052-.572l1.494-4.816H10.13a.75.75 0 1 1 0-1.5h3.649a.75.75 0 0 1 .716.973l-1.8 5.788a.75.75 0 0 1-.712.527"
    />
  </Svg>
);
export default Iconlyst7DaysWarrantyOutline;
