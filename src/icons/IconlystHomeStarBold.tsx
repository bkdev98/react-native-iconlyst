import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystHomeStarBold = ({
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
      d="m12.379 12.479-.005-.009-.377-.763-.375.754c-.118.27-.385.484-.715.558l-.882.129.594.567c.255.276.35.596.3.912l-.145.826.752-.399c.309-.152.655-.152.943-.008l.758.399-.142-.808a.99.99 0 0 1 .312-.924l.58-.563-.831-.121c-.37-.08-.627-.277-.767-.55"
      clipRule="evenodd"
    />
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="m15.729 13.54-1.122 1.088.267 1.52c.042.3-.029.571-.194.79a1 1 0 0 1-.816.404 1.04 1.04 0 0 1-.495-.127l-1.364-.718-1.387.733c-.54.241-1.112.054-1.375-.415a1 1 0 0 1-.114-.664l.269-1.53-1.123-1.072c-.408-.424-.407-1.052-.021-1.452.182-.168.363-.254.572-.289l1.56-.227.695-1.398c.139-.26.36-.44.62-.516.172-.079.468-.072.732.048.235.128.38.273.473.446l.702 1.422 1.548.222c.27.037.511.176.673.39.311.414.268.98-.1 1.345m4.19-5.915-5.572-4.54a3.72 3.72 0 0 0-4.692 0l-5.572 4.54a3.68 3.68 0 0 0-1.37 2.872v7.18a4.076 4.076 0 0 0 4.072 4.07h10.43a4.076 4.076 0 0 0 4.073-4.07v-7.18a3.68 3.68 0 0 0-1.369-2.872"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystHomeStarBold;
