import * as React from 'react';
import Svg, { Path, G } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystBoatOnWaterBulk = ({
  title,
  titleId,
  ...props
}: SvgProps & SVGRProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.size}
    height={props.size}
    fill="none"
    viewBox="0 0 24 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M4.03 17.897c.062.144.225.214.379.184q.24-.048.54-.048c1.79 0 1.79 1.33 3.58 1.33s1.79-1.33 3.58-1.33 1.79 1.33 3.58 1.33c1.387 0 2.193-1.228 3.552-1.324a.32.32 0 0 0 .257-.15l1.582-2.586c.1-.16.1-.35.01-.51a.49.49 0 0 0-.43-.26H3.34a.504.504 0 0 0-.46.7z"
      clipRule="evenodd"
    />
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="m10.189 13.519 6.996.02a.5.5 0 0 0 .5-.472c.516-9.16-7.343-10.421-7.423-10.433a.501.501 0 0 0-.572.495v9.89a.5.5 0 0 0 .498.5M21.441 19.79c-.523-.38-1.122-.752-2.163-.752-1.144 0-1.75.45-2.239.813-.419.31-.697.517-1.345.517s-.925-.206-1.344-.517c-.487-.363-1.095-.813-2.237-.813s-1.749.45-2.237.812c-.419.312-.697.518-1.344.518s-.924-.206-1.343-.517c-.488-.363-1.095-.813-2.237-.813-1.155 0-1.765.455-2.255.82l-.139.103a.75.75 0 0 0 .883 1.212l.152-.112c.423-.315.702-.523 1.36-.523.645 0 .923.205 1.342.517.488.362 1.094.813 2.237.813s1.75-.451 2.238-.813c.42-.312.696-.517 1.343-.517.646 0 .924.205 1.343.517.487.362 1.094.813 2.238.813s1.751-.451 2.24-.813c.418-.312.695-.517 1.344-.517.597 0 .882.176 1.28.466a.75.75 0 1 0 .883-1.213" />
    </G>
  </Svg>
);
export default IconlystBoatOnWaterBulk;
