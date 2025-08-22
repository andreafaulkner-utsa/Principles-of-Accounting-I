import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle, DollarSign, FileText, Brain, CheckCircle, Users } from 'lucide-react';

const CaseStudyWidget = () => {
  const [activeTab, setActiveTab] = useState('scenario');
  const [expandedSections, setExpandedSections] = useState({});
  const [checkedItems, setCheckedItems] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCheck = (item) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const tabs = [
    { id: 'scenario', label: 'The Case', icon: FileText },
    { id: 'investigation', label: 'Investigation Guide', icon: Brain },
    { id: 'resources', label: 'Resources & Data', icon: DollarSign },
    { id: 'reflection', label: 'AI Reflection', icon: CheckCircle }
  ];

  const Section = ({ title, children, section, icon: Icon }) => (
    <div className="mb-4 border border-gray-200 rounded-lg">
      <button
        onClick={() => toggleSection(section)}
        className="w-full px-4 py-3 text-left bg-gray-50 hover:bg-gray-100 flex items-center justify-between rounded-t-lg"
      >
        <div className="flex items-center space-x-2">
          <Icon className="h-5 w-5 text-blue-600" />
          <span className="font-medium">{title}</span>
        </div>
        {expandedSections[section] ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>
      {expandedSections[section] && (
        <div className="p-4 border-t">{children}</div>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center space-x-3">
          <AlertTriangle className="h-8 w-8" />
          <div>
            <h1 className="text-2xl font-bold">TechFlow Solutions: The Missing Inventory Mystery</h1>
            <p className="text-blue-100 mt-1">A case study in fraud detection, internal controls, and AI-assisted analysis</p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b">
        {tabs.map(tab => {
          const IconComponent = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 font-medium transition-colors ${
                activeTab === tab.id
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <IconComponent className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="p-6">
        {/* Scenario Tab */}
        {activeTab === 'scenario' && (
          <div className="space-y-6">
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="h-6 w-6 text-red-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-red-900 mb-2">URGENT: Cash Flow Crisis</h3>
                  <p className="text-red-800">
                    CEO Sarah Chen has called an emergency meeting. Despite record sales, TechFlow Solutions is facing severe cash shortages.
                  </p>
                </div>
              </div>
            </div>

            <Section title="Company Background" section="background" icon={Users}>
              <div className="space-y-3">
                <p><strong>TechFlow Solutions</strong> - E-commerce platform selling tech accessories</p>
                <p><strong>Founded:</strong> 2019 | <strong>Employees:</strong> 45 | <strong>Annual Revenue:</strong> $8.2M (2023)</p>
                <p><strong>Key Personnel:</strong></p>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li>Sarah Chen - CEO/Founder</li>
                  <li>Marcus Rodriguez - CFO (hired 6 months ago)</li>
                  <li>Jennifer Kim - Operations Manager</li>
                  <li>David Park - Warehouse Manager (3 years with company)</li>
                </ul>
              </div>
            </Section>

            <Section title="The Problem Unfolds" section="problem" icon={AlertTriangle}>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-900 mb-2">What Sarah Discovered:</h4>
                  <ul className="list-disc list-inside space-y-2 text-yellow-800">
                    <li>Bank balance shows only $12,000 despite $650,000 in monthly sales</li>
                    <li>Several large customer payments appear to be missing</li>
                    <li>Inventory counts don't match sales records</li>
                    <li>Some vendors complaining about unpaid invoices</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Initial Red Flags:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>David Park recently purchased a new luxury car</li>
                    <li>Some inventory deliveries lack proper documentation</li>
                    <li>Customer complaints about "shipped" items never arriving</li>
                    <li>Cash deposits sometimes delayed or smaller than expected</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="Your Mission" section="mission" icon={FileText}>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">You are TechFlow's newly hired forensic accountant.</h4>
                <p className="text-blue-800 mb-3">
                  Sarah Chen has given you full access to investigate this crisis. You must:
                </p>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Identify what types of fraud may be occurring</li>
                  <li>Analyze internal control weaknesses</li>
                  <li>Perform bank reconciliation analysis</li>
                  <li>Recommend preventive measures</li>
                </ul>
              </div>
            </Section>
          </div>
        )}

        {/* Investigation Guide Tab */}
        {activeTab === 'investigation' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-purple-900 mb-2 flex items-center">
                <Brain className="h-5 w-5 mr-2" />
                AI-Assisted Investigation Protocol
              </h3>
              <p className="text-purple-800">
                Use AI tools to help analyze this case, but remember: you must craft effective prompts and critically evaluate all AI responses.
              </p>
            </div>

            <Section title="Phase 1: Understanding the Fraud Landscape" section="phase1" icon={AlertTriangle}>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold mb-2">Open Investigation Questions:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.fraud_types} 
                        onChange={() => toggleCheck('fraud_types')}
                        className="mt-1"
                      />
                      <span>What types of fraud schemes could explain these symptoms?</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.red_flags} 
                        onChange={() => toggleCheck('red_flags')}
                        className="mt-1"
                      />
                      <span>Which red flags are most concerning and why?</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.perpetrator} 
                        onChange={() => toggleCheck('perpetrator')}
                        className="mt-1"
                      />
                      <span>Who has the opportunity and access to commit these potential frauds?</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>AI Strategy:</strong> Develop prompts to help you understand fraud typologies, but verify responses against chapter concepts.
                  </p>
                </div>
              </div>
            </Section>

            <Section title="Phase 2: Internal Controls Analysis" section="phase2" icon={CheckCircle}>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <h4 className="font-semibold mb-2">Control Environment Assessment:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.cash_controls} 
                        onChange={() => toggleCheck('cash_controls')}
                        className="mt-1"
                      />
                      <span>What cash handling controls are likely missing or weak?</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.inventory_controls} 
                        onChange={() => toggleCheck('inventory_controls')}
                        className="mt-1"
                      />
                      <span>How could inventory controls be strengthened?</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.segregation} 
                        onChange={() => toggleCheck('segregation')}
                        className="mt-1"
                      />
                      <span>What duties should be segregated?</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="Phase 3: Bank Reconciliation Deep Dive" section="phase3" icon={DollarSign}>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="font-semibold mb-2">Follow the Money Trail:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.bank_rec} 
                        onChange={() => toggleCheck('bank_rec')}
                        className="mt-1"
                      />
                      <span>What should you look for in the bank reconciliation process?</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.timing_diff} 
                        onChange={() => toggleCheck('timing_diff')}
                        className="mt-1"
                      />
                      <span>How can timing differences hide fraudulent activity?</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <input 
                        type="checkbox" 
                        checked={checkedItems.deposit_analysis} 
                        onChange={() => toggleCheck('deposit_analysis')}
                        className="mt-1"
                      />
                      <span>What patterns should you analyze in deposit timing and amounts?</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <p className="text-sm text-blue-700">
                    <strong>Critical Thinking:</strong> Don't just ask AI for answers—ask it to help you develop investigation procedures.
                  </p>
                </div>
              </div>
            </Section>

            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h4 className="font-semibold text-amber-900 mb-2">⚡ Challenge Mode:</h4>
              <p className="text-amber-800">
                Instead of asking "What is embezzlement?", try: "Help me develop a checklist to investigate potential cash embezzlement in a small e-commerce company with these symptoms..." 
                Then critique the AI's response against your textbook knowledge!
              </p>
            </div>
          </div>
        )}

        {/* Resources Tab */}
        {activeTab === 'resources' && (
          <div className="space-y-6">
            <Section title="Financial Data Summary" section="financial" icon={DollarSign}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Recent Monthly Sales</h4>
                  <ul className="space-y-1 text-blue-800">
                    <li>January: $620,000</li>
                    <li>February: $650,000</li>
                    <li>March: $640,000</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-900 mb-2">Cash Balances</h4>
                  <ul className="space-y-1 text-red-800">
                    <li>Book Balance: $45,000</li>
                    <li>Bank Balance: $12,000</li>
                    <li>Outstanding Checks: $8,000</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="Key Documents Available" section="documents" icon={FileText}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border border-gray-300 rounded-lg p-3">
                  <h5 className="font-semibold mb-2">✓ Available Records</h5>
                  <ul className="text-sm space-y-1">
                    <li>• 6 months of bank statements</li>
                    <li>• Cash receipts journal</li>
                    <li>• Customer payment records</li>
                    <li>• Inventory shipping logs</li>
                    <li>• Vendor payment history</li>
                  </ul>
                </div>
                <div className="border border-red-300 rounded-lg p-3 bg-red-50">
                  <h5 className="font-semibold mb-2 text-red-800">⚠ Missing/Suspicious</h5>
                  <ul className="text-sm space-y-1 text-red-700">
                    <li>• Some deposit slips</li>
                    <li>• Inventory receiving reports</li>
                    <li>• Cash count sheets</li>
                    <li>• Several customer files</li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section title="Employee Access Matrix" section="access" icon={Users}>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-2 text-left">Employee</th>
                      <th className="border border-gray-300 p-2">Cash Handling</th>
                      <th className="border border-gray-300 p-2">Bank Deposits</th>
                      <th className="border border-gray-300 p-2">Inventory</th>
                      <th className="border border-gray-300 p-2">Customer Records</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">David Park</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="border border-gray-300 p-2 font-medium">Jennifer Kim</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                      <td className="border border-gray-300 p-2 text-center">-</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-medium">Marcus Rodriguez</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                      <td className="border border-gray-300 p-2 text-center">-</td>
                      <td className="border border-gray-300 p-2 text-center">✓</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Section>
          </div>
        )}

        {/* AI Reflection Tab */}
        {activeTab === 'reflection' && (
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border">
              <h3 className="font-semibold text-green-900 mb-2">Meta-Learning: Reflecting on AI Usage</h3>
              <p className="text-green-800">
                The real learning happens when you analyze how well AI helped (or didn't help) your investigation.
              </p>
            </div>

            <Section title="Prompt Engineering Reflection" section="prompts" icon={Brain}>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Evaluate Your Prompts:</h4>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">What was your most effective prompt?</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm" rows="2" placeholder="Describe the prompt that gave you the most useful insights..."></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">What prompt didn't work well?</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm" rows="2" placeholder="Which prompt gave unhelpful or generic responses?"></textarea>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">How did you improve your prompting?</label>
                      <textarea className="w-full p-2 border border-gray-300 rounded-md text-sm" rows="2" placeholder="What changes made your prompts more specific and effective?"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="AI Response Quality Assessment" section="quality" icon={CheckCircle}>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3">Critical Analysis Questions:</h4>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 text-xs font-bold mt-0.5">1</div>
                      <div className="flex-1">
                        <p className="font-medium">Did the AI responses align with your textbook knowledge?</p>
                        <textarea className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm" rows="2" placeholder="Compare AI responses to Chapter 5 concepts..."></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 text-xs font-bold mt-0.5">2</div>
                      <div className="flex-1">
                        <p className="font-medium">What did AI miss or get wrong?</p>
                        <textarea className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm" rows="2" placeholder="Identify gaps or errors in AI responses..."></textarea>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 text-xs font-bold mt-0.5">3</div>
                      <div className="flex-1">
                        <p className="font-medium">Where did your domain knowledge prove essential?</p>
                        <textarea className="w-full mt-1 p-2 border border-gray-300 rounded-md text-sm" rows="2" placeholder="When did you need to correct or supplement AI responses?"></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section title="Final Investigation Report" section="report" icon={FileText}>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold text-purple-900 mb-3">Synthesis Challenge:</h4>
                  <p className="text-purple-800 mb-3">
                    Combine your AI-assisted analysis with textbook knowledge to prepare a final report addressing:
                  </p>
                  <ul className="list-disc list-inside text-purple-800 space-y-1 ml-4">
                    <li>Most likely fraud scenario(s)</li>
                    <li>Internal control recommendations</li>
                    <li>Bank reconciliation procedures needed</li>
                    <li>Prevention strategies for the future</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Presentation Format Options:</h4>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>• Written report (2-3 pages)</li>
                    <li>• Executive summary with recommendations</li>
                    <li>• Presentation slides for TechFlow's board</li>
                    <li>• Memo to CEO Sarah Chen</li>
                  </ul>
                </div>
              </div>
            </Section>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyWidget;