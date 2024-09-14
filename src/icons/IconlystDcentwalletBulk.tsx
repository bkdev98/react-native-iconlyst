import * as React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const IconlystDcentwalletBulk = ({
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
    <G fill={props.color} fillRule="evenodd" clipRule="evenodd" opacity={0.4}>
      <Path d="M17.896 15.344c-.264-.159-.456-.13-.709.02-1.45.852-2.912 1.681-4.364 2.53-.208.122-.367.13-.582.005-1.42-.832-2.859-1.632-4.267-2.483-.38-.23-.667-.187-.989.034-.883.602-1.84 1.08-2.752 1.625a.19.19 0 0 0 .001.326c2.594 1.494 5.201 2.989 7.8 4.497.352.206.64.209.992-.003.98-.59 1.98-1.148 2.973-1.718 1.602-.922 3.204-1.846 4.848-2.791a.19.19 0 0 0 0-.33c-1.012-.582-1.987-1.138-2.95-1.713M21.368 7.65c.005-.537-.151-.852-.632-1.1-.89-.462-1.745-.985-2.611-1.488-.201-.116-.328-.16-.3.158.015.158.028 1.138.034 1.548a.3.3 0 0 1-.155.267c-.586.331-2.66 1.5-3.414 1.933 1.075.62 2.096 1.228 3.139 1.797.309.168.415.354.407.697-.023.99-.006 1.981-.012 2.972-.002.195.04.32.23.426 1.009.567 2.005 1.157 3.008 1.732.082.047.162.15.294.082 0-3.008-.014-6.016.012-9.024M10.745 11.24q.008 1.752.002 3.506c0 .214.037.288.258.16 1.008-.589 2.022-1.167 3.036-1.746.124-.071.19-.151.19-.308a688 688 0 0 1-.014-3.835c-.083.019-2.225 1.246-3.271 1.841-.157.09-.202.211-.201.382" />
    </G>
    <Path
      fill={props.color}
      fillRule="evenodd"
      d="M7.243 14.408c-.012-1.683-.001-3.365-.011-5.048-.002-.284.087-.452.342-.596 1.484-.839 2.955-1.7 4.438-2.543.207-.117.277-.248.275-.479-.01-1.086-.003-2.172-.003-3.258 0-.512-.011-.523-.448-.273C9.28 3.677 6.732 5.152 4.172 6.607c-.372.211-.505.472-.5.892.02 1.456.008 2.912.008 4.368 0 1.54.004 3.08-.003 4.618-.001.263.044.315.292.17q1.465-.859 2.953-1.682c.243-.134.323-.292.32-.565M13.02 5.611c.393-.225.762-.437 1.134-.646.116-.065.117-.166.117-.276q-.003-.822-.001-1.646c0-.11-.002-.212-.116-.277-.372-.208-.742-.42-1.133-.642a.133.133 0 0 0-.2.115v3.257c0 .102.11.166.2.115"
      clipRule="evenodd"
    />
  </Svg>
);
export default IconlystDcentwalletBulk;
