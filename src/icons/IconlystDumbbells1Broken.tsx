import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDumbbells1Broken = ({
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
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.9 18.79c-.04.359-.18.862-.644 1.183-.62.429-2.937.388-3.454.06-.364-.21-.751-.615-.774-2.743-.021-2.128.357-2.54.717-2.758.51-.34 2.827-.428 3.454-.011.471.311.622.811.67 1.168.03.23.234.395.466.393l5.335-.055a.46.46 0 0 0 .457-.402c.041-.358.181-.861.646-1.182.62-.43 2.936-.388 3.453-.06.364.21.752.614.774 2.743.021 2.129-.357 2.54-.717 2.758-.511.339-2.827.428-3.455.011-.47-.311-.62-.811-.67-1.168a.46.46 0 0 0-.465-.393l-2.667.027M14.342 6.466c.096-.348.31-.823.818-1.071.677-.33 2.961.06 3.422.465.328.262.65.719.35 2.827s-.737 2.457-1.126 2.617c-.556.26-2.859-.005-3.416-.51-.417-.38-.491-.896-.486-1.256a.46.46 0 0 0-.4-.46l-5.282-.753a.46.46 0 0 0-.513.33c-.094.346-.31.822-.816 1.07-.678.33-2.962-.06-3.423-.464-.329-.262-.651-.72-.35-2.828.3-2.107.737-2.457 1.125-2.617.557-.26 2.859.005 3.417.51.418.38.49.897.485 1.257a.46.46 0 0 0 .4.459l2.642.376"
    />
  </Svg>
);
export default IconlystDumbbells1Broken;
