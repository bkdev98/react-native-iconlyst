import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const Iconlyst24DaysWarrantyOutline = ({
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
      d="M15.453 8.38c.31.1.52.388.52.714v3.351h.274a.75.75 0 0 1 0 1.5h-.274v.46a.75.75 0 1 1-1.5 0v-.46h-2.2a.75.75 0 0 1-.608-1.188l2.949-4.101a.75.75 0 0 1 .839-.276m-1.716 4.065h.736v-1.024zM9.164 9.863a.664.664 0 0 0-.664.664.75.75 0 0 1-1.5 0 2.164 2.164 0 0 1 4.328 0c0 .676-.283 1.183-.646 1.569-.303.32-.69.583-1 .794l-.095.064c-.369.252-.643.459-.824.682h1.815a.75.75 0 0 1 0 1.5H7.75a.75.75 0 0 1-.75-.75c0-1.478 1.054-2.202 1.74-2.67l.07-.048c.346-.236.595-.406.78-.601.165-.177.237-.332.237-.54a.664.664 0 0 0-.664-.664"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      d="M11.747 21.504a2.93 2.93 0 0 1-2.046-.826l-.034-.032-.708-.708a1.44 1.44 0 0 0-1.02-.42h-1a2.953 2.953 0 0 1-2.949-2.95v-1.006a1.44 1.44 0 0 0-.42-1.019l-.7-.7a2.95 2.95 0 0 1-.018-4.166l.02-.019.694-.7c.269-.271.42-.637.421-1.019V6.87a2.955 2.955 0 0 1 2.947-2.88h1c.383 0 .75-.153 1.021-.422l.7-.7a2.956 2.956 0 0 1 4.171-.012l.712.711a1.44 1.44 0 0 0 1.02.42h1a2.954 2.954 0 0 1 2.95 2.95v1c0 .382.152.749.421 1.021l.7.7a2.955 2.955 0 0 1 .014 4.17l-.713.711a1.43 1.43 0 0 0-.42 1.018v1a2.954 2.954 0 0 1-2.95 2.946h-1.005a1.43 1.43 0 0 0-1.02.422l-.7.7a2.93 2.93 0 0 1-2.078.87zm-1.033-1.934.014.014a1.44 1.44 0 0 0 1.02.42h.004a1.44 1.44 0 0 0 1.021-.429l.706-.7a2.92 2.92 0 0 1 2.078-.859h1.005a1.45 1.45 0 0 0 1.45-1.447v-1a2.93 2.93 0 0 1 .858-2.078l.7-.7a1.456 1.456 0 0 0 0-2.057l-.7-.7a2.94 2.94 0 0 1-.859-2.08v-1a1.45 1.45 0 0 0-1.45-1.45h-1a2.93 2.93 0 0 1-2.079-.858l-.7-.7a1.455 1.455 0 0 0-2.058 0l-.7.7a2.93 2.93 0 0 1-2.08.86h-1a1.453 1.453 0 0 0-1.449 1.45v.997a2.93 2.93 0 0 1-.858 2.078l-.7.7-.016.014a1.45 1.45 0 0 0 .014 2.043l.7.7a2.92 2.92 0 0 1 .86 2.078v1.006a1.45 1.45 0 0 0 1.448 1.45h1a2.93 2.93 0 0 1 2.08.86z"
    />
  </Svg>
);
export default Iconlyst24DaysWarrantyOutline;
