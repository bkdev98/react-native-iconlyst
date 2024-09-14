import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDatabaseSearchBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M4.947 13.693c.79.34 1.6.55 2.43.71.81.16 1.62.25 2.44.3.918.049 1.836.04 2.746-.023a.2.2 0 0 0 .149-.083 5.15 5.15 0 0 1 4.155-2.114c.555 0 1.092.089 1.595.257.06.02.127.014.174-.029.269-.241.38-.695.38-1.028-.007-.898-.009-2.541-.01-3.264 0-.156-.17-.25-.304-.17a5 5 0 0 1-.205.114c-1.29.74-2.69 1.07-4.12 1.29-.66.1-1.33.16-2 .21-1.3.09-2.6.05-3.89-.1-.94-.11-1.86-.28-2.77-.53-.72-.21-1.43-.46-2.09-.84l-.25-.155a.196.196 0 0 0-.3.168c.003.722.005 2.367-.01 3.247 0 .44.14.79.42 1.08.42.45.93.72 1.46.96M11.785 16.763a.217.217 0 0 0-.215-.258q-.387.01-.773.008c-.87-.01-1.74-.05-2.61-.18-.73-.11-1.47-.25-2.19-.42-.85-.2-1.68-.5-2.44-.96l-.168-.096c-.136-.08-.312.014-.311.173.002.723.004 2.33-.011 3.203-.01.52.19.91.54 1.23.4.38.87.63 1.36.83.87.37 1.78.6 2.7.76.88.15 1.76.23 2.64.26.821.026 1.635.015 2.442-.051.166-.014.24-.216.134-.344a5.1 5.1 0 0 1-1.176-3.275c0-.296.023-.592.078-.88" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M3.588 6.252c.458.438 1.003.71 1.568.937 1.019.41 2.078.633 3.152.778.906.122 1.817.184 2.552.173 1.714.002 3.234-.142 4.73-.52.746-.188 1.475-.433 2.157-.82.375-.212.725-.46.996-.823.358-.48.364-1.039-.001-1.512a2.7 2.7 0 0 0-.424-.439c-.581-.475-1.25-.75-1.937-.979-1.224-.405-2.482-.605-3.754-.695-1.736-.124-3.465-.06-5.183.26-.933.172-1.848.415-2.72.826-.464.22-.907.48-1.263.882-.296.334-.47.715-.345 1.192.079.304.259.537.472.74M18.224 18.997a1.915 1.915 0 0 1-3.269-1.35 1.913 1.913 0 0 1 3.825 0c0 .505-.2.987-.556 1.35m2.49 1.43-.853-.852a.21.21 0 0 1-.03-.25c.29-.51.449-1.083.449-1.678a3.415 3.415 0 0 0-3.412-3.41 3.415 3.415 0 0 0-3.413 3.41 3.416 3.416 0 0 0 3.413 3.41c.6 0 1.174-.159 1.684-.45a.21.21 0 0 1 .25.03l.852.85c.146.148.338.22.53.22a.749.749 0 0 0 .53-1.28"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDatabaseSearchBulk;